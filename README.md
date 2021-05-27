# Loon-Market

# Project Overview

## Project Description

Loon Market is based on the recently popularized “food court” concept of dining in which several unique establishments are hosted by one venue which may also supply a bar of their own as well as entertainment (you can visit the Parkville Market in Hartford, CT; the Dairy Market in Charlottesville, VA; Avanti in Denver, CO and Eataly in NYC for some other examples of this model).

Our full stack website provides a queriable database of vendors so that any user can view detailed info about our vendors. User can also sign-up for access privileges to create a new vendor, as well as edit and delete (full CRUD).  


## Wireframes
https://www.figma.com/file/S3vhAeE1g0Qgs17CSBr9yV/Loon-Market?node-id=0%3A1

## Component Hierarchy
https://whimsical.com/loon-market-Vp1nz8484xYdpgvJ6zQDUW

## Schema Sample

Schema for Vendor (originally seeded as well as created by user)

```
const Vendor = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    hours: { type: String, required: true }
  },
  { timestamps: true }
)
```


Schema for User sign-in (required to add vendor, as well as edit and delete)
```
const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)
```
### Team Expectations

https://docs.google.com/document/d/1haP6AozPCRfPOpQEbhC1L6tKFtXN_ufOcGctoM_9i_I/edit

### MVP/PostMVP

#### MVP 

https://github.com/nicolasd1323/Loon-Market/projects/1?add_cards_query=is%3Aopen

#### PostMVP  

-User leaves reviews.<br>
-Include a search bar.<br>
-Include a sort option.<br>
-Include menues for each vendor.<br>
-Add shopping cart <br>
-Incorporate a rating system to reviews.<br>


