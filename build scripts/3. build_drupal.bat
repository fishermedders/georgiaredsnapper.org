@echo off
echo "Building Drupal site..."
npm run build:drupal
echo "Assuming there are no errors, the built drupal site now resides in the dist/drupal directory."
echo "Copy the contents of dist-drupal/drupal_embed.html into the source of https://
