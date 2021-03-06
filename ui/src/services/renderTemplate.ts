export interface StatsData {
  [key: string]: number;
}

export type VoteData = {
  campaign: string;
  counts: StatsData;
  campaignDate: string;
}[];

export function renderTemplate(voteData: VoteData) {
  const keys = ["great", "notThatGreat", "notGreatAtAll"];
  const emojis = ["😁", "😐", "😤"];
  return `
        <table>
          <tr>
           <th>Campaign</th>
            ${emojis.map(key => `<th>${key}</th>`).join("")}
          </tr>
          ${voteData
            .map(
              row => `
                <tr>
                  <td>${row.campaignDate}</td>
                  ${keys.map(key => `<td>${row.counts[key]}</td>`).join("")}
                </tr>
              `
            )
            .join("")}
        </table>`;
}
