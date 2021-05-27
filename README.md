# Loon-Market

Schema for Vendor (originally seeded as well as created  by user) 
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
