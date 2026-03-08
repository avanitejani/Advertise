

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { IoTrashBinOutline } from 'react-icons/io5';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const PrivacyView = () => {
    const router = useRouter();

    // Sample Data
    const [banners, setBanners] = useState([
        { id: 1, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 2, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 3, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: false, image: '/img/image.png' },
        { id: 4, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 5, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: false, image: '/img/image.png' },
        { id: 6, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 7, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 8, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 9, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },
        { id: 10, title: 'Grow Your Business', subtitle: 'Grow Faster', description: 'High performance marketing banners', type: 'Hero', status: true, image: '/img/image.png' },


    ]);

    const toggleStatus = (id) => {
        setBanners(prevBanners =>
            prevBanners.map(banner =>
                banner.id === id ? { ...banner, status: !banner.status } : banner
            )
        );
    };

    // --- Pagination Logic ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Per page 7 entries as per your requirement

    const totalPages = Math.ceil(banners.length / itemsPerPage) || 1;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);

    return (
        /* 
           1. h-[calc(100vh-140px)]: Screen height se header minus karke fix kar diya.
           2. flex flex-col: Elements ko stack karne ke liye.
           3. overflow-hidden: Page scroll ko rokne ke liye.
        */
        <div className="bg-white font-montserrat rounded-lg px-6 shadow-sm border border-gray-100 flex flex-col h-[calc(100vh-140px)] overflow-hidden m-2">

            {/* Table Header (Static) */}
            <div className="flex justify-between items-center  py-4 shrink-0 bg-white">
                <h2 className="text-xl font-semibold text-gray-800">Privacy Policy</h2>
                <button
                    onClick={() => router.push("/privacy/privacy-edit")}
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition"
                >
                    Edit
                </button>
            </div>

            {/* Table Body (Scrollable Area) */}
            <div className="flex-grow overflow-auto scrollbar-thin relative">
                <p className='px-3 py-3 text-[#334155] font-normal text-sm'>
                    Lorem ipsum dolor sit amet consectetur. Felis auctor bibendum ultrices tellus viverra. Nibh nisi at purus vel vitae semper. Risus risus ultrices dictumst cras urna vel in leo nulla. Metus pharetra sem lobortis lorem non pharetra sollicitudin egestas sit. Enim lobortis velit interdum a nisl dictum ac. Eget fusce ut id mi placerat elit faucibus vulputate. Laoreet sed fermentum ullamcorper turpis tempor egestas velit. Etiam tristique justo viverra ut. Congue velit lectus cursus blandit purus morbi amet. Tempus venenatis nec vulputate purus vitae. Quam id in leo tellus neque nunc vestibulum.
                </p>
                <p className='px-3 py-3 text-[#334155] font-normal text-sm'>
                    Velit pellentesque dolor sed vestibulum justo egestas neque. Sit dictum mi mi amet mauris. Nibh eu volutpat egestas sit commodo dolor. Eget scelerisque vel erat viverra elit. Faucibus egestas nulla posuere lectus id. Fusce congue sit tincidunt rhoncus pharetra. Pulvinar eu in ligula eu luctus a feugiat auctor. Suspendisse elit eros cras rhoncus semper pretium eget ipsum laoreet. Bibendum ultrices pulvinar volutpat lacus tellus. Eget pharetra mattis dictum at aenean id nibh sit orci. Quis metus pretium id in. Pulvinar erat hendrerit vel morbi nisl vel velit rutrum ornare. Ac et nec dignissim justo nibh facilisi netus proin.
                </p>
                <p className='px-3 py-3 text-[#334155] font-normal text-sm'>
                    Turpis odio congue nec commodo vivamus nulla commodo amet ac. Bibendum dui elementum habitant sed ultricies purus nulla tincidunt blandit. Condimentum viverra quis tortor sed. Nullam neque mauris vestibulum duis lacus. Ullamcorper at in maecenas auctor sed faucibus magna cras. Velit quis urna nunc tempor leo. Est suscipit dictum scelerisque lectus sit. Elementum odio nibh hendrerit consectetur tempus et eget dolor sed. Viverra sagittis mauris diam pretium pellentesque non. Proin velit risus dignissim amet maecenas suspendisse sit. Cursus amet quis risus eget semper adipiscing gravida. Tincidunt sed id est diam faucibus viverra.
                </p>
                <p className='px-3 py-3 text-[#334155] font-normal text-sm'>
                    Eget eleifend dis vel mattis facilisi rutrum netus urna morbi. Sapien arcu eget sed arcu ultricies dui arcu. Senectus lorem a habitant at ullamcorper. Nunc duis tristique at viverra posuere egestas. Duis dignissim nisi viverra augue id. At semper convallis enim in scelerisque.
                    Consequat in enim venenatis pulvinar. Tempor est posuere etiam ut eu phasellus. Placerat platea auctor tincidunt eget maecenas ullamcorper. Eu quisque faucibus dui in. Dolor ut et a sed lectus dui nisi adipiscing. Sollicitudin amet eu orci sed consectetur massa metus libero luctus.
                    Vestibulum in amet id tincidunt amet nisl aenean vitae. Fermentum semper sagittis molestie elementum tempus mattis felis ipsum. Malesuada ipsum integer lacus viverra lectus mattis pharetra id. Cursus euismod nunc etiam mauris ut ac laoreet tellus sit. Tempor massa enim urna sagittis dignissim.
                    Amet senectus placerat magna non proin ornare mauris quis. Euismod lectus sed sem arcu mauris. Arcu eget suspendisse cursus egestas eu nec. In nisi quis amet sapien orci volutpat tincidunt. Interdum cursus vitae vulputate risus blandit vivamus pellentesque ipsum at.
                    Ut bibendum dui lobortis rhoncus blandit nisi vulputate quis quisque. Adipiscing euismod libero libero morbi pharetra parturient. Neque venenatis mollis fames eget. Malesuada eu elit diam purus fringilla in. Leo varius vitae enim pellentesque pharetra ac. Commodo semper risus sit magna sit nam dui. Neque arcu amet arcu euismod natoque aliquam eget. Gravida arcu urna auctor dictum urna at donec enim dignissim. Eget velit non quis mauris in at scelerisque. Pretium dui nec et laoreet nisl. Nisl lacinia congue nisi praesent. Diam justo eros urna bibendum.
                    Dolor maecenas at ut praesent curabitur. In ullamcorper faucibus nulla turpis in tellus lorem tristique. Mi dictumst eget vel consequat amet ullamcorper egestas sagittis. Non sagittis lobortis dis dignissim phasellus sit purus. In feugiat sit lorem turpis.
                    Tellus tristique pellentesque dapibus dui nulla amet nullam massa diam. In diam in lacus ac. Metus non ullamcorper
                </p>
            </div>

           
        </div>
    );
};

export default PrivacyView;