
const SectionTitle = ({subheading, heading}) => {
    return (
        <div className="mx-auto w-3/12 text-center mb-8 mt-20">
            <p className="text-yellow-600 mb-2">---{subheading}---</p>
            <h3 className="text-3xl font-medium border-y-4 p-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;