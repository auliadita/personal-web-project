// initialize empty 
let blogs = []

function addBlog(event) {
    // make web page doesnt reload
    event.preventDefault()

    // get value from input form
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    // get image from input file
    image = URL.createObjectURL(image.files[0])

    // make al data post blog become one index
    // using object
    let blog = {
        author : "Dita",
        title : title,
        content : content,
        image : image,
        postedAt : new Date ()
    }
    blogs.push(blog)
    // blogs = [title, content, image]
    // blogs = [blog]

    // console.log(blogs)
    // console.table(blogs)

    // make a input to empty submit
    document.getElementById('input-blog-title').value = " "
    document.getElementById('input-blog-content').value = " "
    
    
    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    // set blog content to defaults

    blogContainer.innerHTML = first()

    console.log(blogContainer)
    // execute same code more than one
    // using looping
    console.table(blogs)
    for (let i=0; i < blogs.length; i++) {
        
            blogContainer.innerHTML += `
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[i].image}" alt="" />
                </div>
            <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | ${blogs[i].author}
            </div>
            <p>
              ${blogs[i].content}
            </p>
          </div>
        </div>
            
            `
        
    }
}

function first() {

    return `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog1.jpeg" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
        
          </div>
        </div>

    `

}