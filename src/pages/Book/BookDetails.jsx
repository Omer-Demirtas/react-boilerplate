import { useParams } from "react-router-dom";


const BookDetails = () =>
{
    const { id } = useParams();

    return (
        <div>
            Book Details {id}
        </div>
    );
}

export default BookDetails;