const date = new Date();
export const Tiempo = () => {
  return <p class="text-gray-400 text-sm">{date.toLocaleString()}</p>
}

export const BuyDate = () => {
  return <td class="px-6 py-3">{date.toLocaleDateString()}</td>
}

