_My notes through the code challenge_

# Deliverable

- I decided to deploy in [vercel](https://vercel.com/dashboard). I already have an account and they dont request payment method to deploy.

# Checklist

### Create User Interface as per the Design on next slides

- Create basic Design System **User interface** [DG Figma file](https://www.figma.com/file/fjO8pNw4YkZ2bZr4RQ1SMN/DataGuard-DS?type=design&node-id=14%3A36&mode=design&t=lI75MHet3QllzvH7-1)
  - Define CSS framework. i decided to usetailwindCSS for simplicity.
- Create small _**components**_

### Create a Mock JSON API server for handling GET and POST requests

- Use BE with Nuxt
- Create endpoints to GET and POST requests \_\*\*API Communication
- Type data _**Data structure**_

### Retrieve data from that mock server, use it in your components

- #### Make sure the Toggle Switches are working with the API
- #### Ensure the overall Power Switch disables all the plugins in all the tabs as per the Design
  - _**Two way data binding**_

### Switching between tabs, should change the URL

- make it with Nuxt page routing

## Dockerizar and deploy to Heroku

| status | TaskId | Task                                                                                       | Evaluate                             |
| ------ | ------ | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| DONE   | PL00   | Planning                                                                                   | Planning                             |
| DONE   | FE01   | Create User Interface as per the Design on next slides                                     | User Interface and Components        |
| DONE   | FE02   | Create basic Design System User interface                                                  | Components                           |
| DONE   | FE03   | Create Components                                                                          | Components                           |
| DONE   | FE04   | UI Implementation                                                                          | User Interface                       |
| WIP    | BE01   | Create a Mock JSON API server for handling GET and POST requests                           | Data Structure and API Communication |
| DONE   | BE02   | Create Endpoints to GET requests                                                           | API Communication                    |
| DONE   | BE03   | Create Endpoints to POST requests                                                          | API Communication                    |
| WIP    | BE04   | Type data                                                                                  | Data structure                       |
| DONE   | FS01   | Retrieve data from that mock server, use it in your components                             | Two way data binding                 |
| DONE   | FS02   | Make sure the Toggle Switches are working with the API                                     | Two way data binding                 |
| DONE   | FS03   | Ensure the overall Power Switch disables all the plugins in all the tabs as per the Design | Two way data binding                 |
| DONE   | FS04   | Switching between tabs, should change the URL                                              | Two way data binding                 |
| WIP    | OPS1   | Deploy to Heroku                                                                           | Deliverable                          |
| WIP    | OPS2   | Dockerize                                                                                  | Deliverable                          |
| TODO   | NTV1   | Tests (unit, e2e)                                                                          | Extra mile                           |
| TODO   | NTV2   | Responsive design                                                                          | Extra mile                           |

## FE01 Create User Interface as per the Design on next slides 14:40

### FE02 Create basic Design System User interface 14:40 - 18:00 / 8 hours

- Design tokens (built in app MAC to get RGB colors)
  - Colours
    - DataGuard logo text: 10344A
    - left panel: 241 241 241 - F1F1F1
    - menu text color / All plugins enabled / Marketing Plugins / Plugin X enable: 66 66 66 - 424242
    - Text X enable / border card disable: 173 183 189 - ADB7BD
    - Radio green status enable: 105 199 143 - 69C78F
    - Radio red status enable: 192 54 68 - C03644
  - Typefaces
    - Averta
    - https://www.onlinewebfonts.com/download/a80dc4f0944c45dfa1abae1260cc3852
    - https://www.onlinewebfonts.com/download/447315c0c330fd423c8e1cc18024669d
  - Font sizes
    - 30, 20, 16, 12
  - Font weigths and line heights
    - 300, 400, 500, 700
  - Spacing
    - 36, 24, 22, 16
  - Border radio
    - 8px
  - icons
    - Finance
    - Marketing
    - People
    - Power
  - Gradients
    - grey to green
- Token classes
  - https://www.figma.com/file/fjO8pNw4YkZ2bZr4RQ1SMN/DataGuard-DS?type=design&node-id=14%3A36&mode=design&t=lI75MHet3QllzvH7-1
- Atoms
  - Toogle
- Molecules
  - Card
- Organisms / Page
  - Dashboard

### FE03 Create Components 10:30 - 05:00

- import Averta font ✅
- Define CSS framework
  - TailwindCSS ✅
  - Configure with DS tokens ✅
- Create component-library page ✅
  - http://localhost:3010/visual-guide

### FE04 UI Implementation 05:00 - 06:20 / 11:00 - 18:00 / 21:30 - 23:00

- create page ✅
  - http://localhost:3010/dashboard
    - http://localhost:3010/dashboard/tabs1
- Create menu ✅

## BE01 Create a Mock JSON API server for handling GET and POST requests

### BE02 Create Endpoints to GET requests 23:00 - 03:00

### BE03 Create Endpoints to POST requests 23:00 - 03:00

## FS01 Retrieve data from that mock server, use it in your components

### FS02 Make sure the Toggle Switches are working with the API 03:00 - 03:20

### FS04 Switching between tabs, should change the URL 03:20 - 03:30

### FS03 Ensure the overall Power Switch disables all the plugins in all the tabs as per the Design -3:30 / 06:40

## BE04 Type data

## OPS1 Deploy to Heroku

### OPS2 Dockerize

## NTV1 Tests (unit and e2e)

## NTV1 Tests (unit and e2e)
