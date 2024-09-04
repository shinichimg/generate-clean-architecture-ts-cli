# Generate Clean Architecture CLI

## Overview
This project uses a command-line tool to automatically generate a specific folder structure for application code. The structure is designed to organize code in a clean and maintainable way.

## Folder Structure
The generated structure will follow this format:
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

## Prerequisites

Before installing, ensure you have the following:

- **Node.js** version 16 or higher

## Installing

- To install the required packages, you can use either `yarn` or `npm`:

### Using Yarn
```bash
yarn install
```

### Using npm
```bash
npm install
```

## Usage

- To generate the folder structure for a specific entity, run the following command:

```bash
yarn generate:structure --name='your_file'
```