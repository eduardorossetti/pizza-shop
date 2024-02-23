import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Terms() {
  const navigate = useNavigate()

  return (
    <div className="p-8">
      <h1 className="mb-4 flex justify-center text-center text-lg font-bold">
        Termos de Uso
      </h1>
      <p className="flex justify-center text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
        doloribus, quisquam eos exercitationem deserunt distinctio mollitia
        consequuntur incidunt maxime error est numquam natus eveniet cupiditate
        ad quis ipsam! At aliquam laudantium libero excepturi repellendus in
        ipsam molestias aut officiis harum doloremque repellat dolorum autem
        laborum dolore odio quo possimus labore nam nisi repudiandae dicta, a
        beatae illum. Voluptas voluptatem magnam ut eligendi ad. Corporis hic
        dicta aliquam, voluptatem, pariatur nobis sunt quis exercitationem
        delectus minus voluptas voluptate nam nihil nemo a esse ipsum
        repellendus nostrum sit animi, eligendi quidem distinctio? A est magnam
        architecto, fugiat iure commodi ullam adipisci rem ipsum incidunt
        molestiae ipsa dolores tempora perspiciatis nesciunt quod nostrum.
        Illum, neque. Culpa vel quaerat eius delectus ipsam assumenda provident
        doloremque quae unde dignissimos accusamus magnam sapiente sint, animi
        autem velit impedit asperiores facilis aspernatur! Debitis explicabo
        perspiciatis consectetur harum quis quae, dolorum neque non. Architecto
        perferendis, quia quam, enim voluptate debitis harum sed optio veritatis
        quaerat nobis commodi officiis! Porro, minima sint cupiditate rem dolor
        ullam corporis quisquam libero itaque fugiat odio architecto sequi autem
        veritatis repudiandae exercitationem culpa quasi voluptatum. Laboriosam,
        harum eos? Quibusdam perspiciatis rem nostrum voluptate asperiores rerum
        voluptatem! Non odio ullam adipisci amet placeat in, maxime accusantium
        praesentium nihil similique quidem voluptates libero eos dolores omnis
        sit inventore dignissimos, magnam natus reprehenderit? Cumque error
        dolore temporibus unde repudiandae fugit culpa veritatis dicta,
        architecto similique atque officia vel odit provident animi! Fugit
        repudiandae iste commodi delectus beatae velit recusandae ipsum, harum
        officiis. Soluta quidem placeat recusandae, quia exercitationem quod
        dicta enim sint quisquam repellat unde dolorem hic minus doloribus
        dolorum aliquid fugiat ullam fuga ad non est? Est vel animi quasi
        tempora illo laboriosam repudiandae provident porro quo consequatur
        soluta vero ab aliquam blanditiis, unde quae. Nemo doloremque facilis
        similique in sit libero nobis itaque iure minima, enim asperiores ipsum
        delectus illum rem quia odio aut blanditiis placeat, laudantium
        consequuntur eum ad reiciendis maxime vitae! Ipsa deserunt officiis
        reprehenderit dolore eligendi, ex nemo nostrum aliquam id odio commodi
        eius, perspiciatis voluptatibus quia omnis quas tenetur mollitia
        tempore, rerum nulla necessitatibus fugiat voluptatum exercitationem.
        Mollitia delectus illum voluptatum repellendus modi quam assumenda qui.
        Ex accusantium tempora aliquam, fugiat temporibus debitis fugit soluta
        vitae tempore? Asperiores dignissimos excepturi exercitationem provident
        sequi accusantium odio aspernatur eum nemo ullam et facere nesciunt,
        consectetur iusto nostrum earum repellat laudantium recusandae sed
        possimus! Quas non, iusto architecto doloremque laborum incidunt numquam
        vitae, labore autem ipsa sunt quibusdam fugit harum ratione praesentium
        facere illum. Eum non id minima a, labore aliquid libero maxime nobis
        sint quibusdam fuga veritatis vel eaque praesentium sequi tempore
        nesciunt provident nostrum sit dolorum iure illo corrupti sed qui? Amet
        quod doloremque labore animi vero totam incidunt, temporibus nihil
        tenetur repellat dolores provident eum delectus sapiente error vel
        voluptate ipsa exercitationem excepturi nostrum est alias veniam!
        Tempore, quam fuga. Provident nobis magnam rem et, libero aut dolor
        animi, voluptatem iste dignissimos facere voluptatibus fuga quae numquam
        ratione maiores. Ipsam aliquam sequi adipisci, id veritatis nulla cumque
        ea obcaecati ipsum!
      </p>
      <Button onClick={() => navigate('/pizza-shop/sign-up')}>Voltar</Button>
    </div>
  )
}
