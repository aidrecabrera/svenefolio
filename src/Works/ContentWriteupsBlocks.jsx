import { Component } from "react";

class ContentWriteupsBlocks extends Component {
  state = {
    showcaseInformation: {
      work: [
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project Presence",
          url: "https://example.com/my-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project CorPulse",
          url: "https://example.com/my-other-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project Presence",
          url: "https://example.com/my-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project CorPulse",
          url: "https://example.com/my-other-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project Presence",
          url: "https://example.com/my-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project CorPulse",
          url: "https://example.com/my-other-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project Presence",
          url: "https://example.com/my-work",
        },
        {
          image:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg",
          title: "Project CorPulse",
          url: "https://example.com/my-other-work",
        }
      ],
    },
  };

  render() {
    return (
      <div>
          {this.state.showcaseInformation.work.map((work, index) => (
            <div key={index} className="mt-5 mb-5">
              <img
                src={work.image}
                alt={work.title}
                className="object-cover h-48 w-96 object-center rounded-xl"
              />
              <div className="flex flex-row justify-between">
              <h3 className="mt-5 text-center">{work.title}</h3>
              <a href={work.url} className="mt-5">View ↗</a>
              </div>
            </div>
          ))}
        </div>
    );
  }
}

export default ContentWriteupsBlocks;
