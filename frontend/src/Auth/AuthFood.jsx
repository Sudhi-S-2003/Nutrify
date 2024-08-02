import Card from "../Component/Card";
import FilterSearch from "../Component/FilterSearch";


function AuthFood() {
  return (
    <div>
      <FilterSearch/>
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 gap-4">
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
        <Card id={4}/>
      </div>   
    </div>
  );
}

export default AuthFood;
