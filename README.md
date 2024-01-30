# Microfrontend Reference Components for eRegister

A react micro-frontend to be loaded by Bahmni frontend for your module

## Architecture

For architectural details, [check out the Wiki](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3210477602/Micro-frontends+MFE+architecture+for+UI)

# MOST IMPORTANT CHECKLIST TO SETUP THIS REPOSITORY

### General

- [ ] Update the `name` in `package.json` to your module name
- [ ] Manage translations in `src/public/i18n/*.json`
- [ ] Set the apache path in Dockerfile `package/docker/Dockerfile`

### In `webpack.config.js`:

- [ ] Set the name in `federationConfig -> plugins -> ModuleFederationPlugin -> name` in the format `bahmni_YOUR_MFE_NAME`
- [ ] Set the public path in `federationConfig -> plugins -> ModuleFederationPlugin -> output -> publicPath` as the path of your proxy route
- [ ] Set up the entry components in `federationConfig -> plugins -> ModuleFederationPlugin -> exposes`

### For GitHub workflows

- [ ] Validate the github workflow overall
- [ ] Set the image name and tags in `.github/workflows/build_pulish.yml -> build-publish-docker`
- [ ] Set the build event in `.github/workflows/build_pulish.yml -> trigger-workflow`
- [ ] Set the deployment secrets in `.github/workflows/build_pulish.yml -> trigger-workflow`
- [ ] Enable push on main in `.github/workflows/build_pulish.yml`

## Install and build

**Use npm v14**

```
yarn install
```

### Sandboxed development

The following command loads the `src/entries/EntryComponent1.jsx` in a sandboxed view for local development. This view is fed with dummy data which
can be modified in `src/index.js`

```
yarn dev:sandbox
```

### Integrated development

Running the following builds and watches the `dist/federation/` folder which can be served by an apache container for access by `bahmni`.

```
yarn dev:integrated
```

This builds the `remoteEntry.js` file which exposes the entries as specified in the ModuleFederationPlugin config
