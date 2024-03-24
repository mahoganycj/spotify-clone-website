const BigDipperIcon = ({active}: {active: boolean}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={34} className={`${active ? "fill-brand" : "fill-neutral-500"} hover:scale-110 hover:fill-white cursor-pointer`}>
      <path d="M9.75 11.688v10.624l6-5.312-6-5.313Z" />
      <path
        d="M21 6.375H3c-.827 0-1.5.954-1.5 2.125v17c0 1.172.673 2.125 1.5 2.125h18c.827 0 1.5-.953 1.5-2.125v-17c0-1.17-.673-2.125-1.5-2.125ZM21 25.5H3v-17h18v17Z"
      />
    </svg>
  )
  export default BigDipperIcon;
  