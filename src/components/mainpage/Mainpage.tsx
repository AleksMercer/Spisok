import Card from './components/Card';

function Mainpage (): JSX.Element {

  interface ICard {
    className: string,
    descriptionEN: string,
    descriptionRU: string,
    picture: string,
    urlpath: string
  };

  const proboval: ICard = {
    className: 'proboval-card',
    descriptionEN: 'This is the "Proboval" app. This app is for marking things you have already tried. For example, it can be a restaurant or a dish in it, a store or a product from it. You can try everything! The app provides features such as: creating folders and groups in them, creating cards within groups with what you have tried (or want to try), the ability to specify a rating and a photo of what you have tried.',
    descriptionRU: 'Это приложение "Proboval". Данное приложение нужно, для того чтобы отмечать, то что уже попробовал. Например, это может быть ресторан или какое-то блюдо в нем, какой-то магазин или товар из него. Попробовать можно все! Приложение предоставляет такие возможности как: создание папок и групп в них, создание карточек внутри групп с тем что вы пробовали (или хотите попробовать), возможность указания оценки и фотографии опробованного.',
    picture: require('./media/probovalH.webp'),
    urlpath: 'Proboval'
  };

  const garderob: ICard = {
    className: 'garderob-card',
    descriptionEN: 'This is the "Garderob" app. You need this app to have a visual representation of what you have in your harderob. For example, you can group clothes according to any criteria (brand, season, collection, color, etc.), and within groups create cards for clothes that can be filled with information about them (price, color, where the clothes are, etc.). Also, this app can serve as a wish-list for clothes. The app provides features such as: creating folders and groups in them, creating cards within groups with your clothes, and filling these cards with information.',
    descriptionRU: 'Это приложение "Garderob". Данное приложение нужно, для того чтобы иметь визуальное представление о том что у вас в гардеробе. Например, вы можете группировать одежду по любым своим критериям (бренд, сезон, коллекция, цвет и др.), а внутри групп создавать карточки для одежды, которые можно заполнить информацией о ней (цена, цвет, где лежит одежда и др.). Также это приложение может послужить списком желаемого для одежды.  Приложение предоставляет такие возможности как: создание папок и групп в них, создание карточек внутри групп с вашей одеждой, и заполнение этих карточек информацией.',
    picture: require('./media/garderobH.webp'),
    urlpath: 'Garderob'
  };

  const dela: ICard = {
    className: 'dela-card',
    descriptionEN: 'This is the "Dela" app. This app is a classic to-do list. The app provides features such as: create folders, add groups to them, add elements to groups, and fill these elements with text information.',
    descriptionRU: 'Это приложение "Dela". Данное приложение представляет собой классический список дел. Приложение предоставляет такие возможности, как: создание папок, добавления в них групп, добавления в группы элементов и заполнение этих элементов текстовой информацией.',
    picture: require('./media/delaH.webp'),
    urlpath: 'Dela'
  };

  return (
    <div className='mainpage'>
           
      <Card className={proboval.className} description={proboval.descriptionEN} picture={proboval.picture}  urlpath={proboval.urlpath} />
      <Card className={garderob.className} description={garderob.descriptionEN} picture={garderob.picture}  urlpath={garderob.urlpath} />
      <Card className={dela.className}     description={dela.descriptionEN}     picture={dela.picture}      urlpath={dela.urlpath} />

      <div className="designed"><span>- Site designed and created by <a href="https://github.com/AleksMercer">Mercer </a>© 2023 -</span></div>

    </div>
  )
};

export default Mainpage