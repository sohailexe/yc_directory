const { defineQuery } = require("next-sanity");

const STARTUP_QUERY = defineQuery(`
    *[_type=="startup" && defined(slug.current)]| order(_createdAt desc){
        _id,
        title,
        slug,
        _createdAt,
        author->{
            _id,
            name,
            username,
            image,
            bio
        },
        views,
        description,
        category,
        image
    }
`);

const STARTUP_BY_ID_QUERY = defineQuery(`
    *[_type=="startup"  && _id==$id][0]{
   _id,
     title,
     slug,
     _createdAt,
     author->{
       _id, name,image ,username,bio
     },
     views,description, 
     category,
     image,
     pitch
 }
`);

const STARTUP_VIEWS_QUERY = defineQuery(`
  *[_type=="startup"  && _id==$id][0]{
    _id,
    views
  }

`);

module.exports = {
  STARTUP_QUERY,
  STARTUP_BY_ID_QUERY,
  STARTUP_VIEWS_QUERY,
};
