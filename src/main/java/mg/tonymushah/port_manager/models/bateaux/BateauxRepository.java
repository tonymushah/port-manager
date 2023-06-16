package mg.tonymushah.port_manager.models.bateaux;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BateauxRepository extends JpaRepository<Bateaux, UUID>{
    
}
