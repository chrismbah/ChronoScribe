import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="max-w-screen-xl mx-auto mt-24 mb-10">
      <div className="content h-[350px] w-[65%] mb-4">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Image"
        />
      </div>
      <div className=" w-[65%]">
        <div className="user-info flex gap-4 w-full mb-2">
          <div className="flex gap-3">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="info">
              <span className="text-lg font-bold">John Doe</span>
              <p className="text-xs font-light">Posted 2 days ago</p>
            </div>
          </div>
          <div className="action_btns flex gap-3 text-xs font-bold">
            <button>
              <Link to={`/write/?edit=2`} className="text-blue-500">
                Edit
              </Link>
            </button>
            <button className="text-red-500">Delete</button>
          </div>
        </div>
        <h1 className="font-bold text-gray-900 text-3xl mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          officiis dolorem quaerat repudiandae.
        </h1>
        <div className="flex flex-col gap-4 text-justify leading-7">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            quidem cumque. Aliquid nemo nesciunt perspiciatis animi molestiae,
            beatae ad voluptatibus fugiat consequatur totam blanditiis repellat
            nam suscipit debitis incidunt nobis? Odit, ipsam dicta possimus
            placeat quos doloremque quam ab! Explicabo quia maxime, dolorum
            quibusdam optio natus, magni vel distinctio odio recusandae harum,
            nam enim nisi illum. Deserunt similique soluta laborum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quos
            placeat, accusantium, voluptatem commodi voluptate excepturi
            asperiores veritatis esse dolorem, alias velit voluptatibus aliquid
            ex minus autem officia inventore! Error.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, magni! Quod sit ipsa rem tempore adipisci voluptatum
            optio similique natus! Velit, ad. Aspernatur, eaque voluptatum
            doloremque pariatur labore quod obcaecati! Sequi tenetur praesentium
            id velit impedit non quas, saepe eveniet repudiandae at ut illum ex!
            Exercitationem quaerat voluptas odio natus placeat voluptates animi
            veniam, ratione est assumenda minus molestiae omnis. Eum,
            architecto. Doloremque tempora consequuntur voluptas praesentium
            vitae ullam iure deleniti possimus eaque expedita quia, voluptates
            obcaecati rem nobis assumenda sint impedit repudiandae molestiae
            quibusdam velit facere porro dolores id!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, magni! Quod sit ipsa rem tempore adipisci voluptatum
            optio similique natus! Velit, ad. Aspernatur, eaque voluptatum
            doloremque pariatur labore quod obcaecati! Sequi tenetur praesentium
            id velit impedit non quas, saepe eveniet repudiandae at ut illum ex!
            Exercitationem quaerat voluptas odio natus placeat voluptates animi
            veniam, ratione est assumenda minus molestiae omnis. Eum,
            architecto. Doloremque tempora consequuntur voluptas praesentium
            vitae ullam iure deleniti possimus eaque expedita quia, voluptates
            obcaecati rem nobis assumenda sint impedit repudiandae molestiae
            quibusdam velit facere porro dolores id!
          </p>
        </div>
      </div>
    </div>
  );
}
