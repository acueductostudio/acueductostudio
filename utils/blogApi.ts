import fs from 'fs'
import { join } from 'path'

const postsDirectory = join(process.cwd(), 'public/locales/es/articulos/')

export function getPostSlugs() {
    console.log(postsDirectory) //check
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.json$/, '')
    console.log(realSlug) //check
    const fullPath = join(postsDirectory, `${realSlug}.json`)
    console.log(fullPath) //check
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const data = JSON.parse(fileContents)

    //extra
    // console.log(data);

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            console.log("should be slug")
            items[field] = realSlug
            console.log(items)
        }
        // if (field === 'content') {
        //     items[field] = content
        // }
        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    console.log(slugs)
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    // .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    return posts
}