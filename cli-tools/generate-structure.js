const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase')
// Function to create a directory if it doesn't exist
const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Function to generate the structure
const generateStructure = (name) => {
  const baseDir = 'core';
  const formattedName = formatName(name);
  const camelCaseName = camelCase(formattedName);

  const structure = [
    {
      path: `application/services/${name}.service.ts`,
      content: `// ${name}.service.ts\n\nimport { Get${formattedName}sDto } from "@/core/domain/dtos/${name}.dto";\nimport { ${formattedName}Repository } from "@/core/domain/repositories/${name}.repository";\n\nexport const ${camelCaseName}Service = (\n  ${camelCaseName}Repository: ${formattedName}Repository\n): ${formattedName}Repository => {\n  const get${formattedName}s = async (payload: Get${formattedName}sDto) => {\n    return await ${camelCaseName}Repository.get${formattedName}s(payload);\n  };\n\n  return {\n    get${formattedName}s,\n  };\n};\n`
    },
    {
      path: `domain/dtos/${name}.dto.ts`,
      content: `// ${name}.dto.ts\n\nexport interface Get${formattedName}sDto {\n  id: string\n}\n`
    },
    {
      path: `domain/entities/${name}.entity.ts`,
      content: `// ${name}.entity.ts\n\nexport interface ${formattedName}Entity {\n  id: string\n}\n`
    },
    {
      path: `domain/repositories/${name}.repository.ts`,
      content: `// ${name}.repository.ts\n\nimport { Get${formattedName}sDto } from "@/core/domain/dtos/${name}.dto";\nimport { ${formattedName}Entity } from "@/core/domain/entities/${name}.entity";\n\nexport interface ${formattedName}Repository {\n  get${formattedName}s(payload: Get${formattedName}sDto): Promise<${formattedName}Entity[]>;\n}\n`
    },
    {
      path: `application/controllers/${name}.controller.ts`,
      content: `// ${name}.controller.ts\n\nimport { ${camelCaseName}API } from "@/core/infrastructure/apis/${name}.api";\nimport { ${camelCaseName}Service } from "@/core/application/services/${name}.service";\n\nexport const ${camelCaseName}Controller = () => {\n  return ${camelCaseName}Service(${camelCaseName}API);\n};\n`
    },
    {
      path: `infrastructure/apis/${name}.api.ts`,
      content: `// ${name}.api.ts\n\nimport { Get${formattedName}sDto } from "@/core/domain/dtos/${name}.dto";\nimport { ${formattedName}Entity } from "@/core/domain/entities/${name}.entity";\nimport get from "lodash/get";\nimport axios from 'axios';\nimport { ${formattedName}Repository } from "@/core/domain/repositories/${name}.repository";\n\nexport const ${camelCaseName}API: ${formattedName}Repository = {\n  get${formattedName}s: async (payload: Get${formattedName}sDto) => {\n    const ${camelCaseName}Response = await axios.post<${formattedName}Entity[]>('/${name}s/get', payload);\n    return get(${camelCaseName}Response, "data", []);\n  },\n};\n`
    }
  ];

  // Check if the directory structure already exists
  const existingFiles = structure.filter(file => {
    const fullPath = path.join(baseDir, file.path);
    return fs.existsSync(fullPath);
  });

  if (existingFiles.length > 0) {
    console.error(`Error: The directory structure for '${name}' already exists.`);
    process.exit(1);
  }

  structure.forEach(({ path: filePath, content }) => {
    const fullPath = path.join(baseDir, filePath);
    const dirPath = path.dirname(fullPath);

    // Create directory
    createDirectory(dirPath);

    // Create file with example content
    fs.writeFileSync(fullPath, content, { flag: 'w' });
    console.log(`Created: ${fullPath}`);
  });
};

// Capitalize the first letter of each word in a string and remove special characters
const formatName = (string) => {
  return string
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Get the name argument from the command line
const args = process.argv.slice(2);
const nameArg = args.find(arg => arg.startsWith('--name='));
const name = nameArg ? nameArg.split('=')[1] : null;

if (!name) {
  console.error('Please provide a name using the --name argument.');
  process.exit(1);
}

// Generate the structure
generateStructure(name);
