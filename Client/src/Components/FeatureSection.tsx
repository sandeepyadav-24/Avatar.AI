import Featurecard from "./FeatureCard";
const Featuresection = () => {
  return (
    <div className="feature_Sec mx-40">
      <h1 className="text-[#7326EF] font-bold">FEATURE</h1>
      <h1 className="text-white text-xl"></h1>
      <div className="flex flex-wrap py-10">
        <div className="text-white text-5xl font-bold py-10 ">
          Revolutionize Your Social Media Management with Comprehensive
          Automation and Platform-Centric Customization
        </div>

        <Featurecard
          title="Content Customization for Platform Optimization"
          value="Your tool's generative AI optimizes content for each platform, adjusting length (e.g., 280 characters for Twitter) and customizing tone, style, and format for maximum engagement."
        />
        <Featurecard
          title="Intelligent Content Recommendations"
          value="The AI shortens content and suggests hashtags, boosting post visibility. Users can enhance reach by incorporating trending or industry-specific tags."
        />
        <Featurecard
          title="User-Friendly Content Selection Process"
          value="The interface offers four platform-tailored content options, streamlining user decisions for optimal audience engagement and ease of selection."
        />
        <Featurecard
          title="Automated Scheduling for Timely Posts"
          value="The scheduling feature automates posting, ensuring a consistent and timely social media presence. It saves time and optimizes content delivery for maximum audience engagement."
        />
        <Featurecard
          value="Automating customization, posting, and scheduling reduces manual workload, freeing resources for strategic tasks like content planning and community engagement in social media management."
          title="Reduced Workload on Human Resources"
        />
        <Featurecard
          value="Versatile beyond Twitter, the tool adapts content and posting features for diverse platforms, ensuring a cohesive social media presence across channels and broadening audience reach."
          title="Adaptable to Multiple Social Media Platforms"
        />
      </div>
    </div>
  );
};
export default Featuresection;
