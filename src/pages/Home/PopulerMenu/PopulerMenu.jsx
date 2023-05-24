
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import UseMenu from '../../../hook/UseMenu';


const PopulerMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className='mb-12'>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Populer items'}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;