export function HeaderStyle() {
  return `
    h3 {
      padding: 1.25rem 0rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    > h3::after {
      content: "";
      background-color: rgba(191, 191, 191, .3);
      width: 100%;
      height: 1px;
      margin: 1rem 0rem;
    }`;
}
