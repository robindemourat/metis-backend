# Class

# Function

## `getAssets(req: object, res: object)`

Get a list of assets

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getAsset(req: object, res: object)`

Get a single asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getAssetAttachment(req: object, res: object)`

Get a single asset attachment

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createAsset(req: object, res: object)`

Create a single asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateAsset(req: object, res: object)`

Update a single asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteAsset(req: object, res: object)`

Delete a single asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getAssets(parameters: object): Promise`

Gets a list of assets with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getAsset(parameters: object): Promise`

Gets a asset with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getAssetAttachment(parameters: object): Promise`

Gets a asset with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createAsset(asset: object, data: object): Promise`

Creates a new asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| asset | object |  |
| data | object |  |

## `updateAsset(id: string, asset: object, data: object): Promise`

Updates an asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of the asset |
| asset | object |  | asset data to update |
| data | object |  | attachment data to update |

## `deleteAsset(asset: object): Promise`

Deletes a asset

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| asset | object |  | asset to delete |

## `buildToken(user: object, secret: string, expiresIn: number): string`

Builds a jwt token with user data in payload

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| user | object |  | the user data to build the token with |
| secret | string |  | the app secret to use to encode the token |
| expiresIn | number |  | expiration delay of the token |

## `login(req: object, res: object)`

Handle login attempt from a user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request |
| res | object |  | the resource |

## `signup(req: object, res: object)`

Handle signup request from a user Note: for this cms users creation is protected (admins only) so signup is just the process of activating an account and setting a first password

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request |
| res | object |  | the resource |

## `resetPassword(req: object, res: object)`

Handle password reset request from a user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request |
| res | object |  | the resource |

## `getCompositions(req: object, res: object)`

Get a list of compositions

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getComposition(req: object, res: object)`

Get a single composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createComposition(req: object, res: object)`

Create a single composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateComposition(req: object, res: object)`

Update a single composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteComposition(req: object, res: object)`

Delete a single composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getCompositions(parameters: object): Promise`

Gets a list of compositions with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getComposition(parameters: object): Promise`

Gets a composition with a specific id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createComposition(composition: object): Promise`

Creates a new composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| composition | object |  |

## `updateComposition(id: string, composition: object): Promise`

Updates a composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of composition to update |
| composition | object |  | data to update |

## `deleteComposition(composition: object): Promise`

Deletes a composition

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| composition | object |  | composition to delete |

## `getDeliverables(req: object, res: object)`

Get a list of deliverables

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getDeliverable(req: object, res: object)`

Get a single deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getDeliverableAttachment(req: object, res: object)`

Get a single deliverable attachment

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createDeliverable(req: object, res: object)`

Create a single deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateDeliverable(req: object, res: object)`

Update a single deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteDeliverable(req: object, res: object)`

Delete a single deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getDeliverables(parameters: object): Promise`

Gets a list of deliverables with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getDeliverable(parameters: object): Promise`

Gets a deliverable with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getDeliverableAttachment(parameters: object): Promise`

Gets a deliverable with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createDeliverable(deliverable: object, data: object): Promise`

Creates a new deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deliverable | object |  |
| data | object |  |

## `updateDeliverable(id: string, deliverable: object, data: object): Promise`

Updates an deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of the deliverable |
| deliverable | object |  | deliverable data to update |
| data | object |  | attachment data to update |

## `deleteDeliverable(deliverable: object): Promise`

Deletes a deliverable

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deliverable | object |  | deliverable to delete |

## `getDiffusions(req: object, res: object)`

Get a list of diffusions

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getDiffusion(req: object, res: object)`

Get a single diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createDiffusion(req: object, res: object)`

Create a single diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateDiffusion(req: object, res: object)`

Update a single diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteDiffusion(req: object, res: object)`

Delete a single diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getDiffusions(parameters: object): Promise`

Gets a list of diffusions with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getDiffusion(parameters: object): Promise`

Gets a diffusion with a specific id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createDiffusion(diffusion: object): Promise`

Creates a new diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| diffusion | object |  |

## `updateDiffusion(id: string, diffusion: object): Promise`

Updates a diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of diffusion to update |
| diffusion | object |  | data to update |

## `deleteDiffusion(diffusion: object): Promise`

Deletes a diffusion

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| diffusion | object |  | diffusion to delete |

## `getMontages(req: object, res: object)`

Get a list of montages

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getMontage(req: object, res: object)`

Get a single montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createMontage(req: object, res: object)`

Create a single montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateMontage(req: object, res: object)`

Update a single montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteMontage(req: object, res: object)`

Delete a single montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getMontages(parameters: object): Promise`

Gets a list of montages with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getMontage(parameters: object): Promise`

Gets a montage with a specific id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createMontage(montage: object): Promise`

Creates a new montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| montage | object |  |

## `updateMontage(id: string, montage: object): Promise`

Updates a montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of montage to update |
| montage | object |  | data to update |

## `deleteMontage(montage: object): Promise`

Deletes a montage

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| montage | object |  | montage to delete |

## `getResources(req: object, res: object)`

Get a list of resources

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getResource(req: object, res: object)`

Get a single resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createResource(req: object, res: object)`

Create a single resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateResource(req: object, res: object)`

Update a single resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteResource(req: object, res: object)`

Delete a single resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getResources(parameters: object): Promise`

Gets a list of resources with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getResource(parameters: object): Promise`

Gets a resource with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createResource(resource: object): Promise`

Creates a new resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| resource | object |  |

## `updateResource(id: string, resource: object): Promise`

Updates a resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of resource to update |
| resource | object |  | data to update |

## `deleteResource(resource: object): Promise`

Deletes a resource

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| resource | object |  | resource to delete |

## `retrieveToken()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ensureAdmin(req: object): Promise`

Verifies req is performed by an admin user by inspecting auth token

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |

## `ensureAdminOrOwn(req: object): Promise`

Verifies req is performed by an admin user or by the user corresponding to id param by inspecting auth token

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |

## `getUsers(req: object, res: object)`

Get a list of users

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getUser(req: object, res: object)`

Get a single user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `createUser(req: object, res: object)`

Create a single user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `updateUser(req: object, res: object)`

Update a single user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `deleteUser(req: object, res: object)`

Delete a single user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `changeUserPassword(req: object, res: object)`

Handles password reset (only own user can do that, not even admin)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| req | object |  | the request of query |
| res | object |  | the resource of query |

## `getUsers(parameters: object): Promise`

Gets a list of users with optional query params

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `getUser(parameters: object): Promise`

Gets a user with a specific id or email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| parameters | object |  |

## `createUser(user: object): Promise`

Creates a new user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| user | object |  |

## `updateUser(id: string, user: object): Promise`

Updates a user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | string |  | id of user to update |
| user | object |  | data to update |

## `deleteUser(user: object): Promise`

Deletes a user

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| user | object |  | user to delete |

## `release()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `controller()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `html2img()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `constantify()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getConfig(): object`

Resolves config retrieval method according to mode ('development' or 'production') Uses json file if in dev, env variables if in prod

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `insertDesignDocument(doc: object, db: object, designName: string, design: object): Promise`

Inserts a design document in a couchdb database

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| doc | object |  |
| db | object |  |
| designName | string |  |
| design | object |  |

## `addDesign(db: *, designName: *)`

Adds a new design to a database

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| db | * |  | {object} the nano-handled database |
| designName | * |  | {string} |

## `hash(pwd: str): Promise`

Encodes a string into a crypted hash

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| pwd | str |  | the string to encoded |

## `comparePwd(pwd: string, hash: string): Promise`

Checks whether string matches hash

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| pwd | string |  |
| hash | string |  |

## `welcomeEmail()`

Plurishing-backend ======= Mailing utils

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `resetPwdEmail()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `determineIfOperationalError()`

Custom error handling object to be used in a middleware in order to catch all errors and process them here (save them, send a mail to admin, ...)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `errorHandler()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `sendTestEmail()`

Simulate email sending with ethereal

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `sendEmail(data: object, config: object)`

Sends an email

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| data | object |  | the data of the email |
| config | object |  | the config to use |

## `errorHandler()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `addAdmin()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `dataIsValid()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |