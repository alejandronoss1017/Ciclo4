
# Folder organization

- __/libs__ is usually used for custom classes/functions/modules.
- __/spec__ contains specifications for BDD tests.
- __/tests__ contains the unit-tests for an application.
- __/models__ contains all your ORM models (called Schemas in mongoose)
- __/views__ contains your view-templates (using any template language supported in express)
- __/public__ contains all static content (images, style-sheets, client-side JavaScript).
    - __/images__ contains image files.
    - __/pdf__ contains static pdf files.
    - __/css__ contains style sheets (or compiled output by a css engine).
    - __/js__ contains client side JavaScript.
- __/controllers__ contain all your express routes, separated by module/area of your application.
