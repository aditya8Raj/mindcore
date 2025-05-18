import AllFeatures from "../ui/allFeatures";

const FeatureCards = () => {
  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white pb-16 font-font2">
          Tools That Supercharge Your AI Workflow
        </h2>
        {/* ----- cards here ------ */}
        <AllFeatures />
      </div>
    </section>
  );
};

export default FeatureCards;
