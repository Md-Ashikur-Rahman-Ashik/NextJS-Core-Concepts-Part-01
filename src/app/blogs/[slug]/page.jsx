import React from "react";

const blogs = [
  {
    slug: "modern-web-development",
    title: "Modern Web Development",
    description:
      "An in-depth look into the latest trends and technologies shaping the future of web development, from frameworks to best practices.",
  },
  {
    slug: "ai-in-healthcare",
    title: "AI in Healthcare",
    description:
      "Exploring the transformative impact of artificial intelligence in the healthcare industry, including diagnostics, treatment planning, and patient care.",
  },
  {
    slug: "sustainable-living-tips",
    title: "Sustainable Living Tips",
    description:
      "Practical advice and strategies for living a more sustainable and eco-friendly lifestyle, from reducing waste to conserving energy.",
  },
  {
    slug: "remote-work-success",
    title: "Remote Work Success",
    description:
      "Tips and tools for thriving in a remote work environment, covering productivity, communication, and maintaining work-life balance.",
  },
  {
    slug: "travel-on-a-budget",
    title: "Travel on a Budget",
    description:
      "A guide to exploring the world without breaking the bank, featuring budget-friendly travel tips, destinations, and hacks.",
  },
];

const page = ({ params }) => {
  const { title, description } = blogs.find(
    (blog) => blog.slug === params.slug
  );

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit">
      <h5 className="text-center text-xl">{title}</h5>
      <h5>{description}</h5>
    </div>
  );
};

export default page;