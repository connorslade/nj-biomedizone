# njbiomedical

- njbiomedizone.org
- https://biomedizonenewjersey.carrd.co
- https://www.biomedizone.org

## Todo

- rename to 'NJ BioMedizone'
- sync blog

```graphql
query Publication {
  publication(host: "introtobiomedizone.hashnode.dev") {
    title
    posts(first: 10) {
      edges {
        node {
          title
          brief
          url
          content {
            markdown
          }
        }
      }
    }
  }
}
```
