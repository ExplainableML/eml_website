export default function ContactCard() {
    return (
        <div className="overflow-hidden shadow-lg lg:h-96 bg-white p-8">
            <div className="font-semibold">Explainable Machine Learning Munich</div>
            <div>Ingolstädter Landstraße 1</div>
            <div>85764 Oberschleißheim</div>
            <div className="mb-8"></div>
            
            <div className="font-semibold">Office Munich</div>
            <div>Viktoria Schweiberger</div>
            <a className="text-purple-500" href="mailto:viktoria.schweiberger@helmholtz-munich.de">
                viktoria.schweiberger@helmholtz-munich.de
            </a>

            <div className="mt-4"></div>

            <div className="font-semibold">Office Tübingen</div>
            <div>Michael Mergner</div>
            <a className="text-purple-500" href="mailto:eml-sekretariat@inf.uni-tuebingen.de">
            eml-sekretariat@inf.uni-tuebingen.de
            </a>
            
            
            
        </div>
    )
}