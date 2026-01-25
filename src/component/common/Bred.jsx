
export default function Breadcrumb({
    title = "",
    subtitle = "",
    extra = "",
    bgColor = "bg-gray-50",
    paddingY = "py-16",
    paddingX = "px-4",
    maxWidth = "max-w-4xl",
    textAlign = "text-center"
}) {
    return (
        <div className={`${bgColor} ${paddingY} ${paddingX} w-full`}>
            <div className={`${maxWidth} mx-auto ${textAlign}`}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {title}
                </h1>

                {subtitle && (
                    <>
                        <p className="text-lg md:text-xl text-gray-700 mb-6">
                            {subtitle}
                        </p>
                        <p className="text-sm md:text-md lg:text-md text-gray-700 mb-6">
                            {extra}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
