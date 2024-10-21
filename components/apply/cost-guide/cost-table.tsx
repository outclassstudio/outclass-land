export default function CostTable() {
  return (
    <table className="table-fixed border-2">
      <thead>
        <tr className="*:border-2 bg-neutral-100 dark:bg-neutral-700">
          <th>구분</th>
          <th>비용</th>
          <th>기준</th>
        </tr>
      </thead>
      <tbody>
        <tr className="*:border-[1px] *:text-center">
          <td>채팅 상담</td>
          <td className="*:text-center">
            <tr className="py-1 flex justify-center gap-2 border-b border-dashed">
              <td>10년 분석:</td>
              <td>25,000원</td>
            </tr>
            <tr className="py-1 flex justify-center gap-2">
              <td>평생 분석:</td>
              <td>30,000원</td>
            </tr>
          </td>
          <td>회당</td>
        </tr>
      </tbody>
      <tbody>
        <tr className="*:border-[1px] *:text-center">
          <td>메일 상담</td>
          <td className="*:text-center">
            <tr className="py-1 flex justify-center gap-2 border-b border-dashed">
              <td>10년 분석:</td>
              <td>30,000원</td>
            </tr>
            <tr className="py-1 flex justify-center gap-2">
              <td>평생 분석:</td>
              <td>35,000원</td>
            </tr>
          </td>
          <td>회당</td>
        </tr>
        <tr className="*:border-[1px] *:text-center">
          <td>온라인 화상 상담</td>
          <td className="*:text-center">
            <tr className="py-1 flex justify-center gap-2 border-b border-dashed">
              <td>10년 분석:</td>
              <td>35,000원</td>
            </tr>
            <tr className="py-1 flex justify-center gap-2">
              <td>평생 분석:</td>
              <td>40,000원</td>
            </tr>
          </td>
          <td>회당</td>
        </tr>
      </tbody>
    </table>
  );
}
