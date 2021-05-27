# Loon-Market

# Project Overview

## Project Description


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


### MVP/PostMVP

#### MVP 




#### PostMVP  

-User leaves reviews.<br>
-Include a search bar.<br>
-Include a sort option.<br>
-Include menues for each vendor.<br>
-Include a rating system to reviews.<br>


