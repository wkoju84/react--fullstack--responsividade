import { Record } from "../../../../api/record/model";
import { formatDate, formatTime } from "../../../../util/date";

interface Props{
    record: Record;
}

const Register = ({record} : Props) => {
    return (
          <>
              <td>{record.service}</td>
              <td>{formatDate(record.dateTime)}</td>
              <td>{formatTime(record.dateTime)}</td>
              <td>{record.location}</td>
              <td>{record.customer}</td>
          </>
    )
}

export default Register;