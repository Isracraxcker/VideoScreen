import Header from "@/components/Header";

const Page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
  
    <div className="wrapper page">
    <Header title='IsraDev | Aicodigi' subHeader='isradev@aicodigi.pro'
     userImg="/assets/images/dummy.jpg"
    />
   <h1 className='text-2xl font-karla'>User ID {id}</h1> 
    </div>);
};

export default Page;
