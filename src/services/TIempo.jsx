const date = new Date();
export const Tiempo = () => {
  return <p className="text-gray-400 text-sm">{date.toLocaleString()}</p>
}

export const BuyDate = () => {
  return <td className="px-6 py-3">{date.toLocaleDateString()}</td>
}

