var nullObject = Object.create(null)

//By creating nullObject as an object witha null prototype, you are ensuring that this object does not inherit any methods or properties.
//This allows you to have complete control over the object and not worry about any inherited methods/properties.