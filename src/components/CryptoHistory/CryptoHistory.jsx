import { formatDate } from '../../helpers/formatDate';
import style from './CryptoHistory.module.css';
const head = ["№", "price", "amount", "date"]
const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {head.map((el, index)=>(<th className={style.th} key={index}>{el}</th>))}
   
        </tr>
      </thead>

      <tbody> 
        {items.map(({ id, price, amount, date }, index) => (
          <tr className={style.tr} key={id}> 
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formatDate(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
