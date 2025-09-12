# Team/Project Website Deployment

This section documents the **Team/Project Website** deliverable using the Terraform configuration provided in the `terraform` folder.  
The Terraform setup deploys the website on **AWS Amplify**.

---

## Prerequisites

Before you begin, ensure you have:

- An **AWS account** with root access (or IAM user with admin permissions).
- A generated **Access Key** and **Secret Key** from the AWS console.
- A **GitHub authentication token**.
  - Reach out to **Niccols** to obtain this token.
  - Once you have the token, create a file named `variables.tfvars` inside the `terraform` folder with the following content:
    ```
    token = "<github token>"
    ```

---

## Option 1: Deploy from an EC2 Instance

1. Launch an EC2 Instance

   - Go to the AWS EC2 Console.
   - Launch an instance (Amazon Linux 2 or Ubuntu preferred).
   - Ensure you create/download a `.pem` key pair for SSH.

2. SSH into the EC2 Instance  
   From your local machine:  
   ssh -i /path/to/your-key.pem ec2-user@<EC2_PUBLIC_IP>  
   Replace:

   - `/path/to/your-key.pem` with the path to your downloaded key.
   - `<EC2_PUBLIC_IP>` with the public IP of your EC2 instance.

3. Copy Terraform Files to EC2  
   From your local machine, inside the project root:  
   scp -i /path/to/your-key.pem -r terraform/ ec2-user@<EC2_PUBLIC_IP>:/home/ec2-user/  
   This copies the entire `terraform` folder to your EC2 instance.

---

## Option 2: Deploy from Your Local Machine

If you prefer, you can skip the EC2 setup and run everything directly from your personal computer.

---

## Option 3: Deploy with GitHub Pages

npm run build
npm run deploy


## Installation Steps

1. Navigate to the Terraform Directory  
   cd terraform

2. Run the Installation Script  
   Execute the provided script to configure AWS credentials and install Terraform:  
   ./install.sh  
   The script will prompt you for:

   - AWS Access Key ID
   - AWS Secret Access Key
   - Preferred AWS region (e.g., `us-east-1` is recommended)

3. Apply the Terraform Configuration  
   terraform apply -var-file="variables.tfvars"  
   Type `yes` when prompted.

---

## Output

Once complete, Terraform will print the **Amplify app URL** in the output.  
Open this URL in your browser to access the deployed website.

---

✅ All done! Your Amplify app is now live.
