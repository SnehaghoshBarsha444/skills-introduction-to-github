
import { Star, GitFork, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const TrendingRepo = ({ name, description, stars, forks }: {
  name: string;
  description: string;
  stars: number;
  forks: number;
}) => (
  <div className="glass p-6 rounded-lg animate-fade-in">
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
    <div className="flex items-center space-x-4 text-sm text-gray-500">
      <div className="flex items-center">
        <Star className="h-4 w-4 mr-1" />
        {stars}
      </div>
      <div className="flex items-center">
        <GitFork className="h-4 w-4 mr-1" />
        {forks}
      </div>
    </div>
  </div>
);

const Index = () => {
  const trendingRepos = [
    {
      name: "react/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      stars: 200934,
      forks: 42045
    },
    {
      name: "tensorflow/tensorflow",
      description: "An open source machine learning framework for everyone",
      stars: 174532,
      forks: 87654
    },
    {
      name: "kubernetes/kubernetes",
      description: "Production-Grade Container Scheduling and Management",
      stars: 98765,
      forks: 35678
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Where Code Lives
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, collaborate, and build amazing software projects with developers around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="animate-fade-in">
              Sign up for free
            </Button>
            <Button size="lg" variant="outline" className="animate-fade-in group">
              Explore repositories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Trending Repositories</h2>
            <Button variant="ghost" className="group">
              View all
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingRepos.map((repo) => (
              <TrendingRepo key={repo.name} {...repo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
