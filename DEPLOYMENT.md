# GitHub Pages Setup Instructions

Follow these steps to enable GitHub Pages for this repository:

## Quick Setup

1. **Navigate to Repository Settings**
   - Go to https://github.com/chingalo-family/duka-mkononi-website
   - Click on **Settings** tab

2. **Enable GitHub Pages**
   - In the left sidebar, click on **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

3. **Wait for Deployment**
   - Go to the **Actions** tab
   - Wait for the "Deploy to GitHub Pages" workflow to complete
   - This usually takes 1-2 minutes

4. **Access Your Website**
   - Your site will be available at: https://chingalo-family.github.io/duka-mkononi-website/
   - You can find the exact URL in Settings → Pages after deployment

## Automatic Deployment

The website is configured to automatically deploy when:
- Changes are pushed to the `main` or `master` branch
- You manually trigger the workflow from the Actions tab

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Update the custom domain in Settings → Pages

## Troubleshooting

### Workflow Not Running
- Ensure GitHub Actions are enabled in Settings → Actions → General
- Check that workflow file exists at `.github/workflows/deploy.yml`

### 404 Error
- Wait a few minutes for DNS propagation
- Check that the workflow completed successfully in Actions tab
- Verify GitHub Pages source is set to "GitHub Actions"

### Permission Issues
- Ensure the repository has proper workflow permissions:
  - Settings → Actions → General → Workflow permissions
  - Select "Read and write permissions"

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review workflow logs in the Actions tab
- Open an issue in the repository
