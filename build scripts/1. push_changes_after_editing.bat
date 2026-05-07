@echo off
git add .
set /p commit_message=What changes were made:
git commit -m "%commit_message%"
git push
echo "Changes pushed successfully to remote repository!"
echo "To build the site for drupal, run the build_drupal.bat script."
