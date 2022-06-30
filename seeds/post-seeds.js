const { Post } = require("../models");

const postData = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_body:
      "Condimentum amet condimentum id dolor auctor elit curabitur nullam viverra in laoreet id tincidunt libero nunc odio enim laoreet nec a in id libero vitae condimentum est elit est sit condimentum tincidunt libero odio laoreet ipsum nullam laoreet consectetur elit nullam sit a est condimentum amet adipiscing a lorem dolor ipsum sagittis viverra atlorem id amet odio sit curabitur euismod auctor euismod vitae nec libero atlorem dolor id adipiscing consectetur libero nullam nullam vitae adipiscing adipiscing enim viverra id vitae libero vel amet consectetur viverra at libero consectetur curabitur in nunc a elit dolor vitae dolor consectetur dolor est sagittis adipiscing id atlorem curabitur ipsum est dolor nunc sagittis libero sagittis vel libero nec euismod in ipsum tincidunt laoreet in nunc id sit vel euismod id sagittis sit auctor nunc nec ipsum atlorem nec enim dolor vel euismod auctor auctor odio",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_body:
      "A curabitur nunc in adipiscing curabitur vel nec vitae sit vel at id sit in condimentum lorem consectetur libero enim nec viverra id vel ipsum nunc amet atlorem dolor dolor odio tincidunt elit euismod euismod enim consectetur consectetur nunc libero ipsum sit libero adipiscing sagittis viverra atlorem nullam odio elit curabitur vitae nullam libero odio vel dolor condimentum auctor ipsum id auctor est id in nullam libero nec enim dolor elit euismod laoreet nullam a adipiscing odio id amet vitae ipsum a curabitur nec est libero elit viverra amet dolor est a libero viverra dolor tincidunt euismod nunc consectetur condimentum laoreet laoreet libero dolor sagittis enim sit tincidunt id id condimentum atlorem sagittis",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_body:
      "Est est euismod dolor elit dolor sagittis adipiscing libero amet nullam atlorem curabitur libero amet curabitur libero id consectetur id auctor a ipsum consectetur nec auctor tincidunt curabitur atlorem libero viverra viverra odio sit elit vitae est laoreet ipsum dolor a condimentum amet libero sit sit vel adipiscing vitae tincidunt tincidunt est euismod id vitae vel id in nunc enim vel dolor condimentum sit nunc in id vitae dolor euismod a nullam adipiscing sagittis consectetur amet nec enim enim lorem id viverra libero laoreet dolor ipsum dolor id ipsum sagittis nullam nunc auctor tincidunt nec odio atlorem vel odio libero consectetur condimentum nec in odio id euismod auctor laoreet sagittis",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_body:
      "Est id lorem laoreet consectetur nullam libero est nunc at amet nullam tincidunt a nec auctor condimentum laoreet enim id dolor elit ipsum libero viverra ipsum est atlorem libero euismod dolor nec odio id nullam vel vitae dolor viverra in vel viverra ipsum elit libero enim sit dolor adipiscing euismod odio enim condimentum auctor curabitur condimentum libero adipiscing dolor odio auctor vitae nunc sagittis nec dolor elit vitae sit dolor euismod nunc nunc nullam atlorem id id libero nec amet ipsum a tincidunt amet tincidunt in consectetur in libero sagittis sit laoreet consectetur vel auctor viverra laoreet enim id curabitur in est libero amet curabitur sagittis vitae elit adipiscing sit id curabitur dolor consectetur a atlorem sagittis adipiscing a condimentum id euismod tincidunt",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_body:
      "Adipiscing auctor odio nec sit amet libero amet laoreet atlorem tincidunt ipsum dolor id sagittis odio adipiscing condimentum amet ipsum sit curabitur nullam viverra viverra euismod enim auctor consectetur libero in sit vitae vel ipsum odio libero dolor vel nec auctor libero nunc consectetur libero tincidunt nec vel curabitur atlorem condimentum lorem enim viverra a condimentum dolor adipiscing in in id id nunc libero ipsum auctor nunc sagittis laoreet sagittis libero vitae id nunc sagittis enim enim nec sagittis elit id est libero elit id curabitur vel auctor tincidunt laoreet dolor elit laoreet curabitur vitae a sit a est id dolor id nullam euismod id nullam vitae condimentum vel curabitur viverra elit elit laoreet dolor nullam dolor ipsum dolor in libero est est odio consectetur euismod dolor amet consectetur euismod adipiscing euismod condimentum",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_body:
      "Amet auctor laoreet a nullam vitae sit a consectetur dolor auctor sit dolor sagittis consectetur elit nullam id dolor viverra euismod adipiscing euismod laoreet tincidunt libero in odio curabitur ipsum atlorem tincidunt ipsum atlorem curabitur lorem dolor euismod viverra tincidunt nec vel laoreet consectetur ipsum condimentum id consectetur nec libero id sit amet laoreet auctor condimentum curabitur sagittis amet elit odio adipiscing dolor in libero sagittis tincidunt auctor enim est nunc est atlorem nunc enim libero dolor sagittis odio amet libero dolor vel condimentum id adipiscing a nec elit elit nunc libero nullam est atlorem id libero vel ipsum sit vitae vel a est nec curabitur ipsum in dolor nullam vitae viverra libero id condimentum id vel id adipiscing odio a dolor viverra in viverra sit libero id nec in id nullam at enim euismod est adipiscing amet sagittis auctor vitae elit laoreet",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "Adipiscing viverra dolor nunc atlorem nunc vel in sagittis euismod est condimentum auctor enim dolor amet nec sit ipsum atlorem laoreet amet euismod ipsum laoreet laoreet vel enim a libero elit amet at nullam dolor a id dolor auctor curabitur nec consectetur tincidunt id vel auctor est adipiscing adipiscing in est condimentum a libero consectetur adipiscing id nec nullam ipsum dolor libero libero libero dolor nunc curabitur condimentum nunc amet vel odio id consectetur sit nullam elit laoreet sagittis est vel viverra tincidunt condimentum vitae viverra sagittis id odio nunc condimentum enim vitae sit ipsum vitae in tincidunt tincidunt consectetur libero id enim adipiscing in libero sit viverra id sit odio curabitur lorem in auctor euismod elit odio dolor id odio sagittis curabitur euismod id id auctor sagittis a nullam viverra vitae amet libero nullam tincidunt laoreet elit",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_body:
      "Sagittis elit est atlorem libero nec libero libero consectetur euismod laoreet id euismod laoreet sagittis a elit euismod libero sit curabitur nullam viverra id sit condimentum tincidunt viverra adipiscing libero odio auctor auctor nullam laoreet ipsum consectetur condimentum est vitae at odio sagittis enim nunc id sagittis nec viverra tincidunt dolor vel ipsum nunc amet enim vel sit dolor libero tincidunt enim id adipiscing curabitur vel vel a curabitur atlorem nullam id auctor laoreet dolor in condimentum adipiscing dolor tincidunt odio curabitur vitae a lorem amet condimentum id amet libero auctor consectetur est odio dolor viverra ipsum nullam nec ipsum",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_body:
      "Tincidunt vel elit enim libero id curabitur a est est nunc nullam at id vitae in auctor dolor nunc a elit vel ipsum atlorem adipiscing id adipiscing dolor atlorem sit nec euismod curabitur est consectetur est nullam libero enim laoreet vel dolor condimentum dolor ipsum odio euismod consectetur laoreet odio libero nec ipsum adipiscing amet id libero libero id curabitur auctor dolor enim dolor nec ipsum ipsum viverra lorem auctor vitae adipiscing euismod condimentum sagittis sagittis tincidunt nunc a id consectetur in sit condimentum libero viverra a id id condimentum amet adipiscing atlorem elit nullam sagittis viverra vitae odio enim libero condimentum atlorem amet id euismod sagittis tincidunt id vel nec consectetur laoreet dolor elit nullam enim nunc tincidunt nec euismod dolor nunc viverra a laoreet curabitur viverra nullam auctor libero sit dolor sit amet curabitur sagittis tincidunt in elit dolor odio odio amet vitae in sit libero",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_body:
      "Est in consectetur euismod dolor vel a nec elit enim lorem enim condimentum sagittis odio id sagittis libero vitae dolor id odio a tincidunt in auctor nullam nunc libero est auctor curabitur enim elit condimentum sit consectetur viverra curabitur vitae libero sagittis elit euismod amet id libero dolor euismod auctor curabitur ipsum sagittis amet condimentum vitae consectetur dolor condimentum est nullam libero sit elit libero a a adipiscing est curabitur atlorem adipiscing nec dolor libero tincidunt laoreet ipsum consectetur vel id nunc amet dolor vel amet laoreet sagittis id ipsum id odio vel id auctor auctor viverra vel viverra odio dolor amet viverra atlorem vitae laoreet nunc euismod atlorem libero dolor adipiscing vitae adipiscing odio curabitur euismod nec nec nunc id sit enim consectetur nullam nunc libero in dolor laoreet ipsum nullam tincidunt tincidunt dolor adipiscing tincidunt nec sit atlorem id nullam ipsum sit",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "At nunc elit auctor adipiscing a adipiscing dolor euismod nec libero viverra vel auctor elit auctor in curabitur sagittis viverra nec odio dolor sit in elit id curabitur est laoreet dolor est dolor vitae sagittis consectetur ipsum nunc libero nunc amet sit nullam euismod odio libero enim vel libero vitae tincidunt libero ipsum nullam id sit adipiscing laoreet condimentum consectetur condimentum vel sagittis libero ipsum sit id id amet a odio condimentum atlorem consectetur tincidunt in tincidunt curabitur ipsum viverra odio nunc adipiscing curabitur libero a atlorem est lorem enim sagittis est dolor id vitae dolor tincidunt laoreet euismod euismod condimentum vitae nec atlorem vel nec a dolor amet enim amet id id id libero in dolor consectetur nullam laoreet",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_body:
      "Sagittis condimentum nec amet consectetur ipsum nullam nec est vel odio auctor curabitur dolor adipiscing curabitur a condimentum a amet tincidunt lorem sit viverra in in laoreet tincidunt nec amet vitae nullam elit est nunc enim dolor id consectetur nunc odio dolor adipiscing sit libero euismod id elit libero odio tincidunt vitae curabitur est consectetur libero nunc condimentum euismod euismod vitae euismod nec consectetur sit in at curabitur dolor libero laoreet adipiscing vel dolor odio sagittis elit libero enim laoreet dolor vel condimentum nullam adipiscing id in elit libero nunc atlorem enim auctor atlorem amet sagittis dolor ipsum est vel sit auctor libero tincidunt sagittis viverra a ipsum atlorem vitae id dolor id auctor viverra id laoreet viverra nullam ipsum",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_body:
      "Vel nullam laoreet adipiscing vitae curabitur est atlorem sit in libero ipsum dolor curabitur sit id vel lorem vitae vel nullam vel elit nec in a libero sagittis nec tincidunt elit ipsum odio libero condimentum euismod curabitur nunc laoreet sit est nunc sagittis tincidunt vitae consectetur euismod odio viverra in id adipiscing condimentum enim ipsum viverra dolor nec condimentum elit a dolor elit id dolor amet in curabitur euismod adipiscing nunc nullam laoreet auctor dolor dolor auctor est id vitae est enim tincidunt id in tincidunt condimentum nec auctor dolor libero libero odio consectetur consectetur condimentum euismod id adipiscing nunc a laoreet id at dolor id dolor sagittis vel atlorem vitae ipsum tincidunt enim ipsum sagittis adipiscing dolor consectetur odio libero sit sagittis nec libero viverra sit libero enim est atlorem atlorem amet viverra odio nullam amet id",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_body:
      "Est nec condimentum dolor auctor elit vel consectetur viverra viverra nec elit libero adipiscing ipsum libero libero libero nullam condimentum tincidunt enim adipiscing tincidunt ipsum amet odio consectetur sit condimentum condimentum curabitur laoreet auctor id ipsum amet a vel dolor curabitur amet est curabitur laoreet dolor in a consectetur lorem viverra sagittis sagittis est nullam id a laoreet sagittis ipsum vitae dolor libero id vitae a ipsum consectetur enim sit nunc amet atlorem amet nunc laoreet in euismod in libero nullam tincidunt condimentum libero id est at enim sagittis libero vitae nullam nec id elit vel nunc vitae euismod id enim atlorem atlorem nunc consectetur nunc est dolor dolor dolor auctor elit atlorem curabitur nec euismod odio adipiscing in sit nec enim id tincidunt euismod euismod tincidunt odio nullam vel id sit elit odio dolor adipiscing auctor sagittis viverra id",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_body:
      "Adipiscing ipsum libero atlorem nunc amet adipiscing nec vel condimentum laoreet elit id nec dolor id odio enim tincidunt est dolor condimentum sagittis libero sit odio ipsum nullam enim odio lorem auctor in dolor condimentum nec in dolor est dolor nullam in auctor est id euismod libero curabitur libero euismod adipiscing libero libero vel id nunc atlorem nec auctor atlorem vel sit curabitur odio auctor sagittis a vitae viverra adipiscing tincidunt sit odio curabitur dolor sagittis nullam condimentum vitae laoreet consectetur dolor amet consectetur sit amet nullam consectetur a libero vitae vitae viverra laoreet elit enim nullam vel elit id viverra euismod est elit id ipsum ipsum tincidunt nunc tincidunt condimentum adipiscing ipsum auctor nunc libero consectetur elit laoreet sit vitae in a nec id laoreet curabitur viverra in amet id dolor sagittis est enim a atlorem libero sagittis vel id tincidunt dolor",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_body:
      "Lorem atlorem ipsum est atlorem laoreet id a viverra vitae odio sagittis nullam adipiscing est tincidunt amet laoreet in curabitur laoreet adipiscing nec nunc a libero vel euismod nec vitae sagittis dolor elit libero libero adipiscing enim adipiscing curabitur enim id sit odio sit odio adipiscing amet sit amet condimentum nec nunc id elit dolor id nullam id nullam libero condimentum a amet condimentum dolor est vel elit libero enim amet tincidunt elit consectetur laoreet id auctor nunc nunc dolor sagittis id sagittis atlorem libero odio ipsum auctor consectetur condimentum vel auctor in tincidunt nunc vitae viverra libero dolor id viverra sit curabitur dolor in condimentum vel a nec odio consectetur est nullam viverra in laoreet curabitur enim curabitur a sit id dolor id consectetur in libero enim sagittis tincidunt euismod vel dolor est libero ipsum euismod elit ipsum nullam vitae consectetur ipsum dolor euismod nec euismod auctor atlorem",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "Laoreet nullam viverra adipiscing sit curabitur est ipsum euismod auctor curabitur dolor odio nunc ipsum euismod vel sagittis laoreet adipiscing nullam nec laoreet dolor id dolor auctor odio adipiscing vel a sagittis libero enim enim vitae ipsum sit libero atlorem vitae curabitur consectetur enim adipiscing tincidunt id dolor amet auctor libero nullam libero vitae atlorem nec euismod libero tincidunt est viverra elit a elit in in odio id atlorem id nec in elit ipsum id nunc nunc viverra id amet libero dolor amet condimentum dolor nunc est vel libero viverra dolor est enim odio id consectetur sit lorem condimentum sit amet consectetur",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_body:
      "Curabitur a adipiscing euismod lorem id amet sit nec laoreet amet condimentum tincidunt odio nec atlorem viverra a dolor viverra adipiscing dolor dolor in auctor id odio est libero viverra consectetur consectetur nunc elit sagittis nullam curabitur libero consectetur tincidunt in libero amet condimentum tincidunt ipsum adipiscing consectetur adipiscing ipsum nunc dolor libero libero enim nunc condimentum id sagittis nullam amet in tincidunt nullam est ipsum dolor sagittis a id libero enim sit condimentum id est nullam vitae atlorem vitae atlorem sit a id id nec laoreet elit euismod nunc auctor vitae est in euismod euismod enim laoreet vitae auctor elit ipsum elit curabitur dolor vel vel",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_body:
      "Nunc atlorem elit enim curabitur condimentum dolor sit a libero a euismod odio dolor amet in curabitur dolor laoreet consectetur atlorem nunc in amet at sit nullam est laoreet vitae tincidunt auctor lorem sagittis adipiscing id nec odio condimentum amet elit libero adipiscing consectetur auctor consectetur a tincidunt condimentum adipiscing viverra viverra ipsum elit dolor vel auctor sagittis ipsum sit laoreet libero tincidunt id in viverra laoreet vel condimentum curabitur dolor euismod vel viverra est nec libero sagittis id a libero enim libero dolor tincidunt odio libero euismod id est ipsum nec adipiscing est nullam vel nullam nunc libero auctor atlorem consectetur in enim id elit nunc nec amet sit ipsum odio nullam id dolor dolor vitae",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_body:
      "Nullam viverra nec dolor id consectetur vitae libero tincidunt libero ipsum vitae id odio vel lorem id atlorem est ipsum amet condimentum id consectetur auctor nunc atlorem nullam adipiscing atlorem amet curabitur nunc auctor libero condimentum elit laoreet vel euismod in a viverra nunc enim vel at sit nec nec auctor sit viverra consectetur euismod sagittis sagittis consectetur dolor tincidunt est nullam odio enim id odio amet enim curabitur curabitur dolor tincidunt est dolor euismod id in dolor vitae condimentum amet sit nullam adipiscing libero viverra sit laoreet euismod in id a ipsum sagittis ipsum libero in dolor laoreet nec adipiscing elit libero nunc laoreet curabitur dolor elit enim auctor adipiscing libero condimentum est tincidunt odio dolor id a",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;