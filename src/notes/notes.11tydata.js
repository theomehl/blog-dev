module.exports = {
    tags: "notes",
    layout: "layouts/post.njk",
    permalink: function({page}) {
        return `/notes/${page.fileSlug}/`;
    }
}