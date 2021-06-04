# Loon-Market

https://wizardly-newton-41078d.netlify.app/

# Project Overview

## Back End Deployment URL
https://loon-market.herokuapp.com/api/vendors
## Project Description

Loon Market is based on the recently popularized “food court” concept of dining in which several unique establishments are hosted by one venue.

Our full stack website provides a queriable database of vendors so that any user can view detailed info about our vendors. Users can also sign-up for access privileges to create a new vendor, as well as edit and delete vendors.


## Wireframes
![image](https://user-images.githubusercontent.com/81534592/120846634-6b143f80-c540-11eb-921b-9f6ed5fd1c63.png)
![image](https://user-images.githubusercontent.com/81534592/120846655-71a2b700-c540-11eb-9ef9-c93f39c0463b.png)
![image](https://user-images.githubusercontent.com/81534592/120846671-77989800-c540-11eb-93f6-cb95224d1a77.png)
![image](https://user-images.githubusercontent.com/81534592/120846688-7e270f80-c540-11eb-9dc4-0fb69a8d076a.png)



## Component Hierarchy

![Screen Shot 2021-06-04 at 2 21 12 PM](https://user-images.githubusercontent.com/81534592/120846576-5637ac00-c540-11eb-90ae-7950b326ba27.png)


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


