# Generate Clean Architecture CLI

## Overview
This project uses a command-line tool to automatically generate a specific folder structure for application code. The structure is designed to organize code in a clean and maintainable way.

## Folder Structure
The generated structure will follow this format:
core/ ├── application/ │ └── services/ ├── domain/ │ ├── entities/ │ ├── repositories/ │ └── dtos/ └── infrastructure/ └── apis/

## Usage

To generate the folder structure for a specific entity, run the following command:

```bash
yarn generate:structure --name='your_file'