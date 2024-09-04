# TypeScript Clean Architecture CLI

## Introduction
Welcome to the **TypeScript Clean Architecture CLI**, a command-line utility designed to automate the generation of a well-structured folder layout for your application code. This tool facilitates the implementation of Clean Architecture principles by organizing your codebase into clearly defined layers, enhancing maintainability and scalability.

## Directory Layout
Upon execution, the CLI will generate the following directory structure:

```bash
core/
├── application/
│   └── controllers/
│       └── your_file.controller.ts  
│   └── services/
│       └── your_file.service.ts  
│     
├── domain/
│   └── entities/
│       └── your_file.entity.ts  
│   └── repositories/
│       └── your_file.repository.ts  
│   └── dtos/
│       └── your_file.dto.ts  
│     
└── infrastructure/
    └── apis/
        └── your_file.api.ts  
```

### Each layer serves a specific purpose:
- **Application Layer**: Handles use cases and orchestrates interactions between layers.
- **Domain Layer**: Encapsulates business logic through entities, repositories, and data transfer objects (DTOs).
- **Infrastructure Layer**: Manages external dependencies, such as APIs, databases, and external services.

## Prerequisites
Ensure you have the following installed on your machine:
- Node.js version **16** or **higher**.

## Installation
To set up the CLI, install the required dependencies using your preferred package manager:

### Yarn
```bash
yarn install
```

### Npm
```bash
npm install
```

## How to Use
Generating a new structure is simple. Execute the following command, replacing 'your_file' with the desired name for your entity:
```bash
yarn generate:structure --name='your_file'
```
This will automatically create the corresponding files within the specified folders.

## Example
Running the command:
```bash
yarn generate:structure --name='User'
```
Will create the following files:

```bash
core/
├── application/
│   └── controllers/
│       └── user.controller.ts  
│   └── services/
│       └── user.service.ts  
│     
├── domain/
│   └── entities/
│       └── user.entity.ts  
│   └── repositories/
│       └── user.repository.ts  
│   └── dtos/
│       └── user.dto.ts  
│     
└── infrastructure/
    └── apis/
        └── user.api.ts  
```
Each file is a placeholder, ready to be filled with the logic and structure specific to your application.

## Author
phanhoangviet1004@gmail.com

## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests to improve the tool.



