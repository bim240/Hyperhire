import abhiIcon from '../assets/abhi.svg'
export async function GET() {
  const data = [
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
    {
      img: abhiIcon,
      name: 'Abhishek Gupta',
      info: '마케팅 · 2y+',
      tags: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      tooltipText: '월 100만원',
    },
  ]
  return Response.json({data})
}
