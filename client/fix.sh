
# 👇️  (Windows) delete node_modules and package-lock.json
rd /s /q "node_modules"
del package-lock.json
del -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force

# 👇️ install packages
npm install
