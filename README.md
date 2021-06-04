# Loon-Market

# Project Overview

## Back End Deployment URL
https://loon-market.herokuapp.com/api/vendors
## Project Description

Loon Market is based on the recently popularized “food court” concept of dining in which several unique establishments are hosted by one venue.

Our full stack website provides a queriable database of vendors so that any user can view detailed info about our vendors. Users can also sign-up for access privileges to create a new vendor, as well as edit and delete vendors.


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

-dropdown menu(s) to provide multiple options for vendor hours input<br>
-User leaves reviews.<br>
-Sort/Filter by cuisine <br>
-Include menues for each vendor.<br>
-Add shopping cart <br>
-Incorporate a rating system to reviews.<br>


