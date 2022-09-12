import { readdir, writeFile } from 'fs'

readdir('./src/assets/stencils', (err, files) => {
  const list = []

  files.forEach(f => {
    if (f.endsWith('.drawio')) {
      list.push(`/assets/stencils/${f}`)
    }
  })
  writeFile('src/assets/sidebar_libs.txt', JSON.stringify(list), 'utf8', err => {
    if (err) {
      console.log(err);
    }
  })
})


