

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto my-8">
            <p className="text-yellow-600 mb-2">---{heading}---</p>
            <h3 className="text-4xl border-y-4 py-3 uppercase">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;