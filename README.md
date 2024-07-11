[![Build and Deploy Resume Website](https://github.com/Latzox/crc-frontend/actions/workflows/build-and-deploy-pipeline.yml/badge.svg)](https://github.com/Latzox/crc-frontend/actions/workflows/build-and-deploy-pipeline.yml)

# Cloud Resume Challenge - Frontend

This repository contains the frontend code for the Cloud Resume Challenge.

## Project Overview

The Cloud Resume Challenge is a hands-on project to demonstrate your skills in cloud computing. For more details, visit the [Cloud Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/azure/).

This project is divided into three repositories:
- [crc-frontend](https://github.com/latzox/crc-frontend): Contains the frontend code.
- [crc-backend](https://github.com/latzox/crc-backend): Contains the backend code.
- [crc-deploy](https://github.com/latzox/crc-deploy): Contains the infrastructure as code.

## Structure

- `index.html`: The main HTML file for the resume.

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/crc-frontend.git
    cd crc-frontend
    ```

2. **Open `index.html` in your browser to view the resume.**

## Deployment

Instructions for deploying the static website to Azure Static Web Apps.

1. **Login to Azure:**

    ```bash
    az login
    ```

2. **Deploy using Azure CLI:**

    ```bash
    az staticwebapp create -n <app_name> -g <resource_group> -s "https://github.com/yourusername/crc-frontend" -l <location> --source <branch> --output-location "/"
    ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
